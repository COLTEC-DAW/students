$(function() {
  $('.js-student').each(function() {
    var $student = $(this);
    var username = $student.data('username');

    $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      cache: true,
      success: function(data) {
        $student.prepend('<img class="avatar" src="' + data.avatar_url + '"/>');
      }
    })
  });
});
