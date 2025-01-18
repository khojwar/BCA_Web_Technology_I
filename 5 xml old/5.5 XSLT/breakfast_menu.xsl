<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  
  <!-- Root Template -->
  <xsl:template match="/">
    <html>
      <head>
        <title>Breakfast Menu</title>
      </head>
      <body>

        <h1>Breakfast Menu </h1>
        <xsl:for-each select="breakfast_menu/food">
          <div style="background-color:teal;color:white;padding:4px;margin-bottom:4px">
            <span style="font-weight:bold">
              <xsl:value-of select="name"/> - 
            </span>
            <xsl:value-of select="price"/>
          </div>
          <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
            <p>
              <xsl:value-of select="description"/>
              <span style="font-style:italic"> 
                (<xsl:value-of select="calories"/> calories per serving)
              </span>
            </p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
