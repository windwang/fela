import processStyleWithPlugins from '../../modules/utils/processStyleWithPlugins'

const RULE_TYPE = 1

describe('Processing style', () => {
  it('should process style using data provided via the plugin interface', () => {

    const plugin = style => ({
      ...style,
      foo: 'bar'
    })

    expect(processStyleWithPlugins({ width: 20 }, [ plugin ])).to.eql({
      width: 20,
      foo: 'bar'
    })
  })

  it('should pass the style type', () => {
    const plugin = (style, type) => ({
      ...style,
      foo: type
    })

    expect(processStyleWithPlugins({ width: 20 }, [ plugin ], RULE_TYPE)).to.eql({
      width: 20,
      foo: 1
    })
  })
})
