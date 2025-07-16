import React from "react";

function ShimmerCountryDetail() {
  return (
    <div style={{ padding: "2rem" }}>
      <button disabled style={{ marginBottom: "1rem", opacity: 0.5 }}>
        ⬅ Back
      </button>

      {/* Simulated shimmer for title */}
      <h1
        style={{
          width: "200px",
          height: "30px",
          backgroundColor: "#ccc",
          borderRadius: "4px",
        }}
      ></h1>

      <div className="countrydetail" style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        {/* Flag shimmer */}
        <div
          style={{
            width: "300px",
            height: "250px",
            backgroundColor: "#ddd",
            borderRadius: "8px",
          }}
        ></div>

        {/* Details shimmer */}
        <div className="detail" style={{ flex: 1 }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <p
              key={index}
              style={{
                width: "100%",
                height: "15px",
                backgroundColor: "#eee",
                marginBottom: "1rem",
                borderRadius: "4px",
              }}
            ></p>
          ))}

          {/* Border buttons shimmer */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: "80px",
                  height: "30px",
                  backgroundColor: "#ddd",
                  borderRadius: "6px",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerCountryDetail;
