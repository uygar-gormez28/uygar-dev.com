$sourceDir = "C:\Users\uygrg\.gemini\antigravity\brain\743a02d6-d1d6-4f73-b687-2d384f36deb9"
$destDir = "assets\img"

Copy-Item "$sourceDir\logo_1769941583372.png" -Destination "$destDir\logo.png"
Copy-Item "$sourceDir\banner_1769941597210.png" -Destination "$destDir\banner.png"
Copy-Item "$sourceDir\baklava_1769941610738.png" -Destination "$destDir\baklava.png"
Copy-Item "$sourceDir\cheesecake_1769941624183.png" -Destination "$destDir\cheesecake.png"
Copy-Item "$sourceDir\tiramisu_1769941637548.png" -Destination "$destDir\tiramisu.png"
Copy-Item "$sourceDir\souffle_1769941651604.png" -Destination "$destDir\souffle.png"
Copy-Item "$sourceDir\magnolia_1769941666465.png" -Destination "$destDir\magnolia.png"
Copy-Item "$sourceDir\profiterole_1769941679018.png" -Destination "$destDir\profiterole.png"
Copy-Item "$sourceDir\sutlac_1769941691564.png" -Destination "$destDir\sutlac.png"

Write-Host "Images copied successfully"
