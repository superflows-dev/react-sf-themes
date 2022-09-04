import Themes from '.'

describe('Themes', () => {
  it('Render', () => {
    expect(Themes.getTheme().primaryBgColor).toBe('#0d6efd');
  })
})
