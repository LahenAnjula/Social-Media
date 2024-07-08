import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/*WRITE*/}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/17710992/pexels-photo-17710992/free-photo-of-small-child-in-a-bucket-hat-and-dungarees-among-the-strawberry-beds-in-the-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/*COMMENTS*/}
      <div className="flex gap-4 justify-between mt-6">
        {/*AVATAR*/}
        <Image
          src="https://images.pexels.com/photos/17710992/pexels-photo-17710992/free-photo-of-small-child-in-a-bucket-hat-and-dungarees-among-the-strawberry-beds-in-the-greenhouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/*DESC*/}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">John Doe</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            voluptas ut, officia ducimus pariatur id omnis sunt accusamus
            aliquam soluta amet harum ipsa beatae. Molestiae eveniet labore
            consequatur quo dignissimos?
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300"></span>
              <span className="text-gray-500">123 Likes</span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/*ICON*/}
        <Image
          src="/more.png"
          alt=""
          width={12}
          height={12}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};

export default Comments;
