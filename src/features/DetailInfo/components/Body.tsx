type Student = {
  id: string;
  uid: string;
  first_name: string;
  last_name: string;
  fullName: string;
  baptismal_name: string;
  gender: string;
  student_id: string;
  department: string;
  service: { id: string; name: string }[];
  language: { id: string; name: string }[];
  current_year: string;
  password: string;
  confession: string;
  role: string;
  phone_number: string;
  phoneNumber: string;
  email: string;
};


export default function Body({ studentDetail }: { studentDetail: Student }) {
  return (
    <div className="grid bg-white grid-cols-2 gap-4 text-lg">
      <div className="">
        <p className="text-[#7D807C]">Full Name</p>
        <p>{studentDetail.fullName}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Gender</p>
        <p>{studentDetail.gender}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Student ID</p>
        <p>{studentDetail.id}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Department</p>
        <p>{studentDetail.department}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Acadamic Year</p>
        <p>{studentDetail.current_year}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Service</p>
        <p>{
          studentDetail.service.length !== 0 ?
            studentDetail.service.map((s, i, services) => {
              return s.name + ((services[i + 1] !== undefined) ? ", " : "");
            }) :
            "-"
        }</p>
      </div>
      <div>
        <p className="text-[#7D807C]">phone Number</p>
        <p>{studentDetail.phoneNumber}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Email</p>
        <p>{studentDetail.email ? studentDetail.email : "-"}</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Language</p>
        <p>{
          studentDetail.language.length !== 0 ?
            studentDetail.language.map((l, i, languages) => {
              return l.name + ((languages[i + 1] !== undefined) ? ", " : "");
            }) :
            "-"
        }</p>
      </div>
      <div>
        <p className="text-[#7D807C]">Role</p>
        <p>{studentDetail.role}</p>
      </div>
    </div>
  );
}
