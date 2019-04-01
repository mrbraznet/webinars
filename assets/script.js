function live(){
    var today = new Date();
    var startDate = new Date('{{latest.when | date_to_rfc822}}');
    var endDate = new Date('{{latest.when | date_to_rfc822}}');
    endDate.setHours(endDate.getHours() + 1);

    var live = (startDate <= today && today <= endDate);
    if(live){
        $("#live").removeClass("d-none");
    }
}

$(function() {
  live();
});
