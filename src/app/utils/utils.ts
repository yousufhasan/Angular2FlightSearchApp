
export class Utils {
	public static stringToDate = (dateStr: String)=>{
			 let parts: any[] = dateStr.split("/");
			  return new Date(parts[2], parts[1] - 1, parts[0]);
	}
}