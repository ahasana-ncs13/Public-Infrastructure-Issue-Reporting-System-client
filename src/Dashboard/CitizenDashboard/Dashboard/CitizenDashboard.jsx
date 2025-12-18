import React from 'react';

const CitizenDashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Total Issues</h2>
                  <p className="text-3xl font-bold text-primary">124</p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Pending</h2>
                  <p className="text-3xl font-bold text-warning">18</p>
                </div>
              </div>

              <div className="card bg-base-200 shadow-md">
                <div className="card-body">
                  <h2 className="card-title">Resolved</h2>
                  <p className="text-3xl font-bold text-success">96</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default CitizenDashboard;