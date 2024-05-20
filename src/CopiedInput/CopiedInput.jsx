import { useState } from 'react'
import { MdContentCopy } from "react-icons/md";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CopiedInput() {
  const [copied, setCopied] = useState(false)

  const [value, setValue] = useState("")

  return (
    <>
      <div className='bg-black h-screen flex items-center justify-center  input-group'>

        <div className="relative w-1/3">

          <input
            type='text'
            value={value}
            className='h-12 px-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500'
            onChange={(e) => { setValue(e.target.value) }}
          />


          <CopyToClipboard text={value}
            onCopy={() => setCopied(true)}>

            <div className="absolute inset-y-0  right-2 flex items-center" >
              <button className='bg-blue-300 p-2  hover:bg-blue-400 rounded-full'>
                <MdContentCopy size={30} />
              </button>
              {copied ? <span style={{
                color: 'black', backgroundColor: "white"
                , padding: "4px", borderRadius: "8px", top: "-50px"
                , left: "0", position: "absolute"
              }}

              >Copied</span> : null}
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}
