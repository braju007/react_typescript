type GreetProps = {
  name: string;
  unreadMessages?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { unreadMessages = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${unreadMessages} unread messages`
          : `Welcome guest`}
      </h2>
    </div>
  );
};
