Add-Type -AssemblyName System.Drawing

$srcPath = "D:\RNAHealthTech\Drgourav siwas\public\images\dr_gourav_logo.png"
$outPath = "D:\RNAHealthTech\Drgourav siwas\public\images\dr_gourav_emblem.png"

$src = [System.Drawing.Image]::FromFile($srcPath)
$w = 210
$h = 240
$cropRect = New-Object System.Drawing.Rectangle(0, 4, $w, $h)
$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$destRect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$src.Dispose()
Write-Output "dr_gourav_emblem.png created successfully"
