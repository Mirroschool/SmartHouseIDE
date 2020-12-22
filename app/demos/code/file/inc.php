<?
/*
=====================================================
PHPMyManager v.1.11
-----------------------------------------------------
 http://mit-home.nov.ru
-----------------------------------------------------
(c) Mr.M.I.T. - 2008
----------------------------------------------------
 Файл: inc.php
-----------------------------------------------------
 Назначение: Функции
=====================================================
*/
function remdir($DIR){
	$handle = opendir ($DIR);
	while($file = readdir ($handle)) {
		if ($file == "." or $file == ".."){
                                  continue;
                                 }
		if (filetype("$DIR/$file") == "file") {
			if (is_writable("$DIR/$file") && is_writable($DIR)) {
				unlink("$DIR/$file");
			}

		      }
		else{
                                 remdir("$DIR/$file");
                        }
	}
            
	closedir($handle);
	rmdir($DIR);
}
function size_dir($DIR,$size){
	$handle = opendir ($DIR);
	while ($file = readdir ($handle))
	{
		if ($file == "." or $file == ".."){
                                  continue;
                                 }
       
		if (filetype("$DIR/$file") == "file")
		{
			$size = $size + filesize("$DIR/$file");
		}
		else {
                                $size = size_dir("$DIR/$file",$size);  
                              }
                        }

	closedir($handle);
return $size;
}
?>