export default {
    functional: true,
    render(h, { props }) {
      return h('div', {
        class: {
          'flex items-center': true,
          'hover:bg-gray-50': props.href,
        },
      }, [
        h(props.icon, { class: 'w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-900' }),
        h('p', { class: 'text-base font-medium text-gray-900 group-hover:text-gray-700' }, [props.name]),
      ]);
    },
  };