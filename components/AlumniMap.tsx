'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { alumniData } from '../data/alumniData'
import { Alumni } from '../types/alumni'

export default function AlumniMap() {
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);

  useEffect(() => {
    // 这里我们只是模拟地图加载，实际项目中您需要加载真正的地图SDK
    console.log("地图加载中...");
  }, []);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>大学校友地图</CardTitle>
        <CardDescription>查看校友分布情况</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
          <p>地图加载中...</p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumniData.map((alumni) => (
            <Card key={alumni.id} className="cursor-pointer" onClick={() => setSelectedAlumni(alumni)}>
              <CardContent className="pt-4">
                <h3 className="font-semibold">{alumni.name}</h3>
                <p>所在城市：{alumni.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedAlumni && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold">{selectedAlumni.name}</h3>
            <p>所在城市：{selectedAlumni.city}</p>
            <p>经度：{selectedAlumni.longitude}</p>
            <p>纬度：{selectedAlumni.latitude}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

