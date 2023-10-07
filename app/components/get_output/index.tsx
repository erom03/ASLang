import { exec } from "child_process"

const GetOutput = async () => {
    let programOutput = "";
        
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
