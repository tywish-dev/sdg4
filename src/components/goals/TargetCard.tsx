interface TargetCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const TargetCard = ({ number, title, description, imageUrl }: TargetCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white shadow-md rounded-sm">
      <div className="flex-shrink-0">
        <div className="bg-[#c31c2d] flex items-center justify-center h-20 w-20 p-2">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="text-[#c31c2d] font-bold mr-2">
            Hedef {number}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 uppercase tracking-[.075em] leading-relaxed">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TargetCard;
