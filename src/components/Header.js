import Button from './Button';

const Header = ({ onClick, showTask }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={showTask ? 'red' : 'green'}
        text={showTask ? 'Close' : 'Add'}
        onClick={onClick}
      />
    </header>
  );
};

export default Header;
