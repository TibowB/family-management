interface ButtonProps {
  classes: string;
  content: string;
  handleOnClick: Function;
}

export default function Button({
  classes,
  content,
  handleOnClick,
}: ButtonProps) {
  return (
    <>
      <button className={classes} onClick={() => handleOnClick()}>
        {content}
      </button>
    </>
  );
}
