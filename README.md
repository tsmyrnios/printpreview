#Print Preview

The printpreview.js script allows for form fields to be automagically expanded for print.

####Dependencies

- jQuery 1.7+

####Required Files

- printpreview.js
- printpreview-print.css
- printpreview-screen.css

####Sample Usage

    <html>
        <head>
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
            <script type="text/javascript" src="printpreview.js"></script>
            <link rel="Stylesheet" type="text/css" href="printpreview-screen.css" media="screen" />
            <link rel="Stylesheet" type="text/css" href="printpreview-print.css" media="print" />
        </head>
        <body>
            <input type="text" value="Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample" style="width:100px" />
            <input type="radio" value="Test" />
            <input type="checkbox" value="Test" />
            
            <textarea style="width:200px; height:100px;">Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
            Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
            Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample
            Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample</textarea>
            <select multiple="multiple" size="3">
                <option value="1" selected="selected">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1" selected="selected">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1" selected="selected">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
            </select>
        </body>
    </html>

