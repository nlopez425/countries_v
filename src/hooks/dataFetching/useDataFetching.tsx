import {useState, useEffect} from 'react';

export default function useDataFetching(url:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network response failed: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError((err as Error).message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}