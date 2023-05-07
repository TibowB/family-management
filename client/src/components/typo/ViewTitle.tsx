interface ViewTitleProps {
  value: string;
  children?: JSX.Element;
}

export default function ViewTitle({ value, children }: ViewTitleProps) {
  return (
    <div className="flex justify-between mt-4 items-center">
      <h2 className="font-bold text-2xl">{value}</h2>
      {children}
    </div>
  );
}
