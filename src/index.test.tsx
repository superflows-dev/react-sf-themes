import Themes from '.'

describe('Themes', () => {
  it('Render', () => {
    expect(Themes.getTheme().colors.primaryBgColor).toBe('#0d6efd');
  })
})
