import Themes from '.'

describe('Themes', () => {
  it('Render', () => {
    expect(Themes.getTheme().theme.primaryBgColor).toBe('#0d6efd');
  })
})
