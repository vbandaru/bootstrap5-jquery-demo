function showLoading() {
  const template = `<div class="d-flex align-items-center" id='loading-indicator'>
                        <strong>Loading...</strong>
                        <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                    </div>`;
  $("#page-content").append(template);
}

function showAlert(type, message) {
  let cssClass = type == "error" ? "alert-danger" : "alert-success";

  const template = `
                <div class="alert ${cssClass} alert-dismissible fade show" role="alert">
                    ${message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div> `;
  $("#alerts").html(template);
}

function hideLoading() {
  $("#loading-indicator").remove();
}
