(function ($) {
 
  $(document).ready(function() { 
    
    $('.webform-component--name input').attr('placeholder', Drupal.t('Nom'));
    
    $('.webform-component-email input').attr('placeholder', Drupal.t('Email'));

    $('.webform-component--subject input').attr('placeholder', Drupal.t('Objet'));

    $('.webform-component--message textarea').attr('placeholder', Drupal.t('Votre message'));

    $('.simplenews-subscribe .form-item-mail input').attr('placeholder', Drupal.t('email@dymant.com'));
    
    $('#user-login-form #edit-name').attr('placeholder', Drupal.t('Login'));
    
    $('#user-login-form #edit-pass').attr('placeholder', Drupal.t('Password'));
    
    $('#search-block-form input').attr('placeholder', Drupal.t('Search'));
  
  });
  
})(jQuery);
