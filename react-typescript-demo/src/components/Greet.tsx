type GreetProps = {
  name: string;
  unreadMessages: number;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {props.name}! You have {props.unreadMessages} unread messages
      </h2>
    </div>
  );
};
