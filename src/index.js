export default (editor, opts = {}) => {
  const options = {
    ...{
      dynamicName: 'dynamic',
      dynamicOpts: {},
      // default options
    }, ...opts
  };

  const { dynamicName, dynamicOpts } = options
  const domc = editor.Components;

  domc.addType(dynamicName, {
    model: {
      defaults: {
        content: `${dynamicName}...`,
        dynamicName,
      },
      ...dynamicOpts
    }
  });

  editor.on('block:drag:stop', (component, block) => {
    const content = block.getContent();
    if (component && content.switch) {
      const parent = component.parent().get('type');
      const swtchs = content.switch;
      swtchs.forEach((swtch) => {
        if (swtch.parents.includes(parent)) component.replaceWith({ type: swtch.type });
      });
      if (component.get('dynamicName') === dynamicName) component.remove();
    }
  });
};