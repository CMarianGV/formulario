import { FormularioPage } from './app.po';

describe('formulario App', () => {
  let page: FormularioPage;

  beforeEach(() => {
    page = new FormularioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
