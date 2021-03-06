import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/wrapped-input', 'Integration | Component | ui/wrapped input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/wrapped-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/wrapped-input}}
      template block text
    {{/ui/wrapped-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
