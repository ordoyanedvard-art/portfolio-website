# Обновление программы до последней версии из GitHub.
# Ключи (.env), настройки (config.yaml) и готовые клипы (data) не трогаются.
# Запуск:  powershell -ExecutionPolicy Bypass -File .\update.ps1
$ErrorActionPreference = "Stop"
$app = $PSScriptRoot
Set-Location $app
docker compose down
Remove-Item "$env:TEMP\clipper-update" -Recurse -Force -ErrorAction SilentlyContinue
Invoke-WebRequest "https://github.com/ordoyanedvard-art/portfolio-website/archive/refs/heads/claude/skool-knox-review-ng0hm2.zip" -OutFile "$env:TEMP\clipper-update.zip"
Expand-Archive "$env:TEMP\clipper-update.zip" "$env:TEMP\clipper-update" -Force
$new = (Get-ChildItem "$env:TEMP\clipper-update" -Directory)[0].FullName + "\stream-clipper"
Copy-Item "$new\clipper\*" "$app\clipper" -Recurse -Force
Copy-Item "$new\requirements.txt","$new\Dockerfile","$new\docker-compose.yml","$new\README.md","$new\config.example.yaml","$new\update.ps1" $app -Force
docker compose up -d --build
Write-Host "Обновлено и запущено. Логи: docker compose logs -f" -ForegroundColor Green
