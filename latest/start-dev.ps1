# Start Vite dev server and keep it running indefinitely
$ErrorActionPreference = "Continue"

Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host "Vite Dev Server Launcher - KEEP THIS TERMINAL OPEN" -ForegroundColor Green
Write-Host "=" * 60 -ForegroundColor Cyan
Write-Host ""
Write-Host "Server URL: http://localhost:5173/" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow
Write-Host ""

# Run directly without loop - let Vite handle its own lifecycle
& npm run dev -- --port 5173 --host localhost

# Keep terminal open if it closes
Write-Host ""
Write-Host "Server stopped. Press any key to exit..." -ForegroundColor Red
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
