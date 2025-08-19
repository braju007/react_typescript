type GreetProps = {
  name: string;
  unreadMessages: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.unreadMessages} unread messages`
          : `Welcome guest`}
      </h2>
    </div>
  );
};
