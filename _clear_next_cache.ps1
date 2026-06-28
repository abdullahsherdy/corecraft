Set-Location 'D:\Coding Instructor\CoreCraft'
$ErrorActionPreference = 'Continue'

Write-Output '===== CLEAR NEXT.JS CACHE ====='

# Step 1: Find and stop next-related node processes (targeted, not all node)
Write-Output '--- Step 1: checking for next-related node processes ---'
$nextProcs = Get-CimInstance Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -like '*next*' }

if ($nextProcs) {
    foreach ($p in $nextProcs) {
        Write-Output ("Found next-related process PID {0}: {1}" -f $p.ProcessId, $p.CommandLine)
    }
    foreach ($p in $nextProcs) {
        Write-Output ("Killing PID {0} (and child tree)..." -f $p.ProcessId)
        & taskkill /F /T /PID $p.ProcessId 2>$null | Out-Null
        Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
    Write-Output 'Done stopping next-related processes.'
} else {
    Write-Output 'No next-related node processes found. Nothing to stop.'
}

# Step 2: Delete .next directory completely
Write-Output '--- Step 2: deleting .next directory ---'
if (Test-Path -LiteralPath '.next') {
    try {
        Remove-Item -LiteralPath '.next' -Recurse -Force -ErrorAction Stop
        Write-Output 'Deleted .next via Remove-Item.'
    } catch {
        Write-Output ("Remove-Item failed: {0}. Retrying with rmdir /s /q..." -f $_.Exception.Message)
        & cmd /c rmdir /s /q ".next" 2>$null
    }
} else {
    Write-Output '.next directory did not exist (already absent).'
}

# Step 3: Delete tsconfig.tsbuildinfo (stale incremental build info)
Write-Output '--- Step 3: deleting tsconfig.tsbuildinfo ---'
if (Test-Path -LiteralPath 'tsconfig.tsbuildinfo') {
    Remove-Item -LiteralPath 'tsconfig.tsbuildinfo' -Force -ErrorAction SilentlyContinue
    Write-Output 'Deleted tsconfig.tsbuildinfo.'
} else {
    Write-Output 'tsconfig.tsbuildinfo did not exist (already absent).'
}

# Step 4: Verify everything is gone
Write-Output '--- Step 4: verification ---'
$nextExists = Test-Path -LiteralPath '.next'
$tsbExists = Test-Path -LiteralPath 'tsconfig.tsbuildinfo'
Write-Output (".next exists after cleanup: {0}" -f $nextExists)
Write-Output ("tsconfig.tsbuildinfo exists after cleanup: {0}" -f $tsbExists)
if (-not $nextExists -and -not $tsbExists) {
    Write-Output 'RESULT: SUCCESS - .next removed and tsconfig.tsbuildinfo removed (or absent).'
} else {
    Write-Output 'RESULT: PARTIAL - some artifacts may still remain; see above.'
}

# Self-delete this temporary script so the repo stays clean
try {
    Remove-Item -LiteralPath $PSCommandPath -Force -ErrorAction Stop
} catch {
    Write-Output ("Note: could not self-delete script: {0}" -f $_.Exception.Message)
}
