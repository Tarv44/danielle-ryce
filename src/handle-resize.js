const handleResize = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

export default handleResize;