function test(team, intArray, engArray) {

    return `
   
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
   

${team.map((info) => mgrMarkup(info))};

${intArray.map((info) => intMarkup(info))};
    
${engArray.map((info) => engMarkup(info))};

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>

  `};


  const mgrMarkup = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
    <h5 class="card-header">${manager.getRole()}</h5>
      <div class="card-body">
        <h5 class="card-title"> ${manager.getname()}</h5>
        <div class="card" style="width: 16rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${manager.getid()}</li>
            <li class="list-group-item">${manager.getemail()}</li>
            <li class="list-group-item">${manager.getofficeNumber()}</li>
          </ul>
        </div>
      </div>
    </div>
  
  `
};
  
  const intMarkup = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <h5 class="card-header">${intern.getRole()}</h5>
      <div class="card-body">
        <h5 class="card-title"> ${intern.getname()}</h5>
        <div class="card" style="width: 16rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.getid()}</li>
            <li class="list-group-item">${intern.getemail()}</li>
            <li class="list-group-item">${intern.getschool()}</li>
          </ul>
        </div>
      </div>
    </div>

   

  `
};

const engMarkup = (engineer) => {
  return `
  <div class="card" style="width: 18rem;">
  <h5 class="card-header">${engineer.getRole()}</h5>
    <div class="card-body">
      <h5 class="card-title"> ${engineer.getname()}</h5>
      <div class="card" style="width: 16rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getid()}</li>
          <li class="list-group-item">${engineer.getemail()}</li>
          <li class="list-group-item">${engineer.getgitHub()}</li>
        </ul>
      </div>
    </div>
  </div>
`
};
  
  module.exports = test;


