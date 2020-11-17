import PropTypes from 'prop-types';

const appUser = PropTypes.shape({
  avatar_url: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  is_pro: PropTypes.bool,
  name: PropTypes.string,
});

export {appUser};
