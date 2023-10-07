import { exec } from "child_process"
import path from "path";

const GetOutput = async () => {
    let programOutput = "";
    
    const dir = path.resolve("..components")
    
    const { stdout } = exec(process.cwd() + "/app/components/get_output/test.bat");
    
    if(stdout) {      
      for await (const data of stdout) {
        programOutput += data;
      }
    }
    
    if(programOutput.includes("testing"))
      return <div>Working</div>
    else
      return <div>Not Working</div>
  };

export default GetOutput;
