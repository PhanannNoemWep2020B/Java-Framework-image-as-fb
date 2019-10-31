$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function (data) {
            var result = "";
            data.hits.forEach(element => {
                result +=`
                  <div class = "card-body">
                    <img src = "${element.largeImageURL}" class= "img-fluid">
                  </div>
                  <div class = "card-footer">
                    <img src = "${element.userImageURL}" class= "img-fluid rounded-circle" width= "40px">
                    ${element.tags} 
                    <i class ="material-icons text-danger float-left">favorite</i> 
                    <button type="button" class="btn btn-warning float-right" data-toggle="modal" data-target="#myModal${element.id}">
                    View
                  </button>
                  </div>
                  <div class="modal fade" id="myModal${element.id}">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
        <img src = "${element.userImageURL}" class= "img-fluid rounded-circle" width= "40px">
        ${element.tags} 
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
        <img src = "${element.largeImageURL}" class= "img-fluid">
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">${element.likes}
        <i class ="material-icons text-success float-left">thumb_up &nbsp;</i>  
        </li>
        <li class="list-group-item">${element.favorites}
        <i class ="material-icons text-danger float-left">favorite &nbsp;</i> 
        </li>
        <li class="list-group-item">${element.views}
        <i class ="material-icons text-info float-left">visibility &nbsp;</i> 
        </li>
        <li class="list-group-item">${element.comments}
        <i class ="material-icons text-warning float-left">message &nbsp;</i>
        </li>
      </ul>
        </div>
      </div>
    </div>
  </div>
                `;
            });
            $("#card").append(result);
        }
    );

});