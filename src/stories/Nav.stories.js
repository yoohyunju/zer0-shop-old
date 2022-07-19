import Nav from "./Nav";

export default {
  title: "Nav/navbar",
  component: Nav,
  argTypes: {
    backgroundColor: {control: "color"} // 전달 인자: color 타입
  }
}

// Nav 컴포넌트가 args를 전달받아 props로 내려줌
const Template = (args) => <Nav {...args}/>

// storybook에서 확인하고 싶은 컴포넌트는 export const로 작성
// Template를 사용해 스토리 생성
export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: "white"
}