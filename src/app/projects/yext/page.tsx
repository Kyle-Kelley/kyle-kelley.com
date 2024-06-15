import YextContent from "@/app/components/YextContent";
import YextBio from "@/app/components/YextBio";

export default function Page(){

    return (
      <div className="text-center mb-4">
        <h2 className="mb-4">Bios</h2>
        <YextBio className="mb-4" />
        <h3 className="mb-4">Entities</h3>
        <YextContent />
      </div>
    )

};