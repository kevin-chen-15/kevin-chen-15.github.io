<?PHP

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $text = "Name:" . $name . "\n";
    $fp = fopen('textfile.txt', 'a+');
    if(fwrite($fp, $text))  {
        echo 'Saved!';
    }
    fclose ($fp);    
}

?>
