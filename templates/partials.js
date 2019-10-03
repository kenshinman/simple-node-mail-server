const header = () => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mail Tamplate</title>
  <style>
    * {
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }

    .container {
      max-width: 600px;
      margin: 30px auto;
      box-shadow: 1px 1px 5px #eee;
      padding: 30px;
      border-radius: 5px
    }

    header {
      margin-bottom: 30px;
    }

    .centered {
      text-align: center
    }

    h4 {
      line-height: 0.3rem;
    }

    .detail {
      border-bottom: 1px solid #eee;
      border-left: 3px solid grey;
      padding: 5px 40px;
      margin-bottom: 10px;
      ;
    }

    .header_bg {
      background-image: url(http://new.nathanielbassey.net/resources/images/nath_transparent.png);
      background-size: contain;
    }
  </style>
</head>

<body>
  <div class="container">
    <header class="centered header_bg">
      <h2 class="logo "><a href="https://nathanielbassey.net">
          <img src="http://new.nathanielbassey.net/resources/images/nath_logo_dark.png" alt="Logo"></a></h2>
      <h3>Booking Received</h3>
    </header>`;
};

const footer = () => {
  return `</div></body></html>`;
};

const partials = { header, footer };

module.exports = partials;
