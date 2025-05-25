Write-Host "Starting build process..."
$env:CI = "false"
$env:NODE_ENV = "production"
$env:GENERATE_SOURCEMAP = "false"
$env:NODE_OPTIONS = "--max-old-space-size=4096"

Write-Host "Installing dependencies..."
npm install --legacy-peer-deps

Write-Host "Starting build..."
npx react-scripts build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build completed successfully!"
} else {
    Write-Host "Build failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
