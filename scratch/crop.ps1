Add-Type -AssemblyName System.Drawing

$srcPath = "D:\RNAHealthTech\Drgourav siwas\public\images\gallery-2.jpeg"
$outPath = "D:\RNAHealthTech\Drgourav siwas\public\images\dr_gourav_scrubs.jpg"

$src = [System.Drawing.Image]::FromFile($srcPath)
# gallery-2 is 1254 x 1254
# Dr Gourav in scrubs is centered in roughly x=540 to 1250, y=100 to 1150
$x = 520
$y = 120
$width = 720
$height = 1080

$cropRect = New-Object System.Drawing.Rectangle($x, $y, $width, $height)
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$destRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$g.DrawImage($src, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

$bmp.Save($outPath, $jpegCodec, $encoderParams)
$bmp.Dispose()
$src.Dispose()
Write-Output "Successfully cropped and saved dr_gourav_scrubs.jpg"
