export default {
    functional: true,
    render(h, { props }) {
      return h('div', { class: 'text-gray-400' }, [
        h(props.icon, { class: 'w-5 h-5' }),
      ]);
    },
  };