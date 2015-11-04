Package.describe({
  name: "admithub:admithub-styles",
  summary: "Common styles for AdmitHub sites",
  version: "0.0.2",
  git: "https://github.com/AdmitHub/admithub-styles.git"
});

Package.onUse(function(api) {
  api.use([
    'stylus'
  ]);

  api.addFiles('client/css/screen.styl', 'client');

  api.addFiles('client/css/common/mixin.import.styl', 'client');
  api.addFiles('client/css/common/base.import.styl', 'client');
  api.addFiles('client/css/common/variables.import.styl', 'client');
  api.addFiles('client/css/common/override.import.styl', 'client');

  api.addFiles('client/css/common/type.import.styl', 'client');
  api.addFiles('client/css/common/layout.import.styl', 'client');
  api.addFiles('client/css/common/position.import.styl', 'client');
  api.addFiles('client/css/common/grid.import.styl', 'client');
  api.addFiles('client/css/common/zindex.import.styl', 'client');
  api.addFiles('client/css/common/icons.import.styl', 'client');
  api.addFiles('client/css/common/ui.import.styl', 'client');
  api.addFiles('client/css/common/ui-form.import.styl', 'client');
  api.addFiles('client/css/common/markdown.import.styl', 'client');
  api.addFiles('client/css/common/tables.import.styl', 'client');
  api.addFiles('client/css/common/link.import.styl', 'client');
  api.addFiles('client/css/common/space.import.styl', 'client');
  api.addFiles('client/css/common/no.import.styl', 'client');
  api.addFiles('client/css/common/sidebar.import.styl', 'client');
  api.addFiles('client/css/common/responsive.import.styl', 'client');

  api.addFiles('client/css/modules/section.import.styl', 'client');
  api.addFiles('client/css/modules/page.import.styl', 'client');
  api.addFiles('client/css/modules/tables.import.styl', 'client');
  api.addFiles('client/css/modules/hero.import.styl', 'client');
  api.addFiles('client/css/modules/dropdown.import.styl', 'client');
  api.addFiles('client/css/modules/markdown.import.styl', 'client');
  api.addFiles('client/css/modules/alerts.import.styl', 'client');
  api.addFiles('client/css/modules/progress-bar.import.styl', 'client');
  api.addFiles('client/css/modules/common.import.styl', 'client');
  api.addFiles('client/css/modules/sign-in.import.styl', 'client');
  api.addFiles('client/css/modules/bot.import.styl', 'client');
  api.addFiles('client/css/modules/chat.import.styl', 'client');

  api.addFiles('client/css/global/header.import.styl', 'client');
  api.addFiles('client/css/global/footer.import.styl', 'client');
  api.addFiles('client/css/global/content.import.styl', 'client');

  api.addAssets('public/icons/fonts/icons.eot', 'client');
  api.addAssets('public/icons/fonts/icons.svg', 'client');
  api.addAssets('public/icons/fonts/icons.ttf', 'client');
  api.addAssets('public/icons/fonts/icons.woff', 'client');
});
