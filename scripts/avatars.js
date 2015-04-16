$(function() {
  $('.js-student').each(function() {
    var $student = $(this);
    var username = $student.data('username');
    var $avatar = $student.find('.js-avatar');

    $.ajax({
      url: 'https://api.github.com/users/' + username,
      dataType: 'json',
      timeout: 2000,
      cache: true,
      success: function(data) {
        $avatar.attr('src', data.avatar_url);
        var $name = $student.find('.js-name');
        $name.text(data.name);
      },
      error: function() {
        $avatar.attr('src', 'https://github.com/identicons/' + username + '.png');
      }
    })
  });
});
