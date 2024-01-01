/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface TitleProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<TitleProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
