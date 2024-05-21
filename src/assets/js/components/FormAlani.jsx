import Form from './Form';

export default function FormAlani() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-1/3 mr-5 hidden sm:lg:block">
        <img src="https://via.placeholder.com/500" />
      </div>
      <div className="w-2/3 max-w-md">
        <Form></Form>
      </div>
    </div>
  );
}
